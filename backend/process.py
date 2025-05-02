import pandas as pd

#arquivo de entrada e saida
SOURCE_CSV = 'TMDB_movie_dataset_v11.csv'  
OUTPUT_CSV = 'data.csv'    
NUM_ROWS_TO_KEEP = 3000

#colunas selecionadas
COLUMNS_TO_KEEP = ['id', 'poster_path', 'title', 'release_date', 'runtime', 'genres', 'original_language', 'vote_average','overview']

#salvando arquivos em csv novamente
try:
    
    df_subset = pd.read_csv(
        SOURCE_CSV,
        usecols=COLUMNS_TO_KEEP,
        nrows=NUM_ROWS_TO_KEEP
    )

    df_subset.to_csv(OUTPUT_CSV, index=False, encoding='utf-8') 

except Exception as e:
    print(f"ERROR inesperado durante o processamento do CSV: {e}")

