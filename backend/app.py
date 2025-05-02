import math
import os
import pandas as pd
from flask import Flask, request, jsonify, url_for
from flask_cors import CORS 

app = Flask(__name__)
CORS(app) 

DATA_CSV = 'data.csv'
#função de leitura do csv
def load_data_from_csv(filename):
    try:
        df = pd.read_csv(filename)

        records = df.to_dict(orient='records')
        return records
    except Exception as e:
        print(e)
        return []
        
ALL_MOVIES = load_data_from_csv(DATA_CSV)   

#logica de paginação     
def paginate_data(data, page, per_page):
    
    total_items = len(data)
    total_pages = math.ceil(total_items / per_page) if per_page > 0 else 0
    start_index = (page - 1) * per_page
    end_index = start_index + per_page
    items_on_page = data[start_index:end_index]

    next_url = None
    if page < total_pages and total_pages > 0:
        args = request.args.copy()
        args['page'] = page + 1
        args['per_page'] = per_page
        next_url = url_for(request.endpoint, _external=True, **args)

    prev_url = None
    if page > 1 and total_pages > 0:
        args = request.args.copy()
        args['page'] = page - 1
        args['per_page'] = per_page
        prev_url = url_for(request.endpoint, _external=True, **args)

    return {
        "page": page,
        "per_page": per_page,
        "total_items": total_items,
        "total_pages": total_pages,
        "data": items_on_page,
        "next_page_url": next_url,
        "previous_page_url": prev_url
    }     
        
@app.route('/movies', methods=['GET'])
def get_movies():
    #tratamento de erro
    if not ALL_MOVIES and os.path.exists(DATA_CSV):
        return jsonify({"error": "Erro interno ao carregar dados dos filmes"}), 500
    try:
        page = int(request.args.get('page', 1))
        per_page = int(request.args.get('per_page', 10))
    except ValueError:
        return jsonify({"error": "Parâmetros 'page' e 'per_page' devem ser números inteiros."}), 400
        
    if page < 1: page = 1
    if per_page < 1: per_page = 1
    
    paginated_result = paginate_data(ALL_MOVIES, page, per_page)
    
    if page > paginated_result['total_pages'] and paginated_result['total_pages'] > 0:
        return jsonify({
             "error": f"Página {page} não encontrada. A última página é {paginated_result['total_pages']}."
        }), 404
    elif page > 1 and paginated_result['total_pages'] == 0:
        return jsonify({"error": "Não há filmes para exibir nesta página."}), 404
    
    return jsonify(paginated_result)

@app.route('/detail/<int:movie_id>', methods=['GET'])
def get_movie_by_id(movie_id):
   
   movie = next((movie for movie in ALL_MOVIES if int(movie.get('id', -1)) == movie_id), None)
   
   if movie is None:
        return jsonify({"error": f"Filme com ID {movie_id} não encontrado."}), 404

   return jsonify(movie)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)