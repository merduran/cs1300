import json
import csv
g = csv.writer(open("../../clean_data/5_25-5_26_good.csv", "w"))
g.writerow(['timestamp','ECG','Heart Rate','Respiration Rate','alarms','Airway','Pleth','SpO2','Non-invasive Blood Pressure','qos'])
with open('../../original_data/5-25-5-26.txt', 'r') as raw_data:
	i = 0
	for line in raw_data:
		data_object = json.loads(line)
		if data_object['qos'] is 1:
			features = []
			for key, value in data_object.items():
				features.append(value)
			g.writerow(features)