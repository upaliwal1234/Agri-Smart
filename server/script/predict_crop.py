import sys
import json
import pandas as pd
import numpy as np
from sklearn.naive_bayes import GaussianNB
import os
import joblib

# Get the current working directory
current_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the absolute path to the joblib file
joblib_file = os.path.join(current_dir, 'NaiveBayes_updated.joblib')

# Load the model
NaiveBayes = joblib.load(joblib_file)


# Read features input from stdin
features_json = sys.stdin.readline()
features = json.loads(features_json)

# Create DataFrame from features input
data = np.array([list(features.values())])
data_with_feature_names = pd.DataFrame(data, columns=features.keys())

# Predict crop
prediction = NaiveBayes.predict(data_with_feature_names)

# Print prediction
print(prediction[0])
