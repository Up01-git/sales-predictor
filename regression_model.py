import pickle

import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split

data = pd.read_csv('train.csv')

df = data[['Date', 'Sales']]

df['Date'] = pd.to_datetime(df['Date'])

df = df[df['Sales'] != 0]

X = np.array(df['Date'].values, dtype='float')

y = np.array(df['Sales'].values)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=10)

X_train = X_train.reshape(-1, 1)
X_test = X_test.reshape(-1, 1)

clf_rf = RandomForestRegressor(
    n_estimators=1000, oob_score=True, random_state=10)
clf_rf.fit(X_train, y_train)

filename = 'finalized_model.sav'
pickle.dump(clf_rf, open(filename, 'wb'))
