auth_token = {
    "secret_key": "585d6ae566c3a59834f3bde0751f052a0a6348286616d31abc5151f940c21289",
    "algorithm": "HS256",
    "token_expire_minutes": 1440  # 24 hours but not in use
}

database_config = {
    "url": "postgresql+psycopg2://postgres:postadmin@localhost:5432/canvatreeDB",
}
