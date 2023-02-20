from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)

CORS(app)

@app.route("/predict", methods=['GET', 'POST'])
@cross_origin()
def getPrediction():
    
    print(request.args)
    date = request.args
    print(date)

    import pandas as pd
    import numpy as np
    import pickle
    
    df = pd.DataFrame(list(date.items(1)), columns=['name', 'date'])
    print(df)
    df['date'] = pd.to_datetime(df['date'], infer_datetime_format=True)

    X_user = np.array(df['date'].values, dtype='float')
    X_user = X_user.reshape(-1, 1)
    loaded_model = pickle.load(open(r'D:\Upassini\Digiverz_project\sales_predict\finalized_model.sav', 'rb'))

    pred = loaded_model.predict(X_user)
    sales = pred.tolist()
    print(sales)
    return sales



if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')