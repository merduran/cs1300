import csv
import json
import re

dates = set()
in_alarms = False
# with open('../../original_data/5-25_5_26_annotated_ekg.txt', 'r') as annotation_file:
#     next(annotation_file)
#     for line in annotation_file:
#         if 'annotated' in line: 
#             in_alarms = True 
#             continue
#         if in_alarms and line is not '\n': dates.add(str(line).split(',')[0])

fieldnames = ['timestamp','ECG','Heart Rate','Respiration Rate','Airway','Pleth','SpO2','Non-invasive Blood Pressure','qos','alarms']
writer = csv.DictWriter(open('../../clean_data/5-25_5-26_ECG.csv','w'), fieldnames=fieldnames)
good_data = csv.DictReader(open("../../clean_data/5_25-5_26_good.csv"), delimiter=',')

# Question: should we add alarm or window annotations into set date?
# Current opinion: alarm annotations. that's precisely when alarms set off. Window annotations on the other hand
# pertain to data from within the range [t-5min, t+5min], with some windows for which the alarm is silent.
# On the other hand, we may wanna consider such windows nonetheless because of our assumption that alarms at t 
# might correspond to vital signs within [t-5, t+5].
# Extracting QoS=1 .json data, put in csv file (assume QoS=0 reliable indicator of an actually bad signal)
# Find data row of alarms (if alarm annotations) and change val of alarms field to "ECG"
# write every such row to '../../clean_data/5-25_5-26_ECG.csv'

# ECG_pattern = re.compile("[]")
# print("ECG_pattern = ", ECG_pattern)
# other_pattern = re.compile(r"{\w+'(.*)(Alarm)")


# ECG_pattern = re.compile(r"{\w+'(.*)(Alarm\w+':\s{(u'\w+':\su'\w+'),\s)*(u'string': u'ECG)")
# other_pattern = re.compile(r"{\w+'(.*)(Alarm)")

for row in good_data:
    # print("row['alarms'] = ", row["alarms"])
    if row["alarms"] is '': 
        writer.writerow(row)
    elif "'string': 'ECG'" in row["alarms"]:
        row["alarms"] = "ECG"
        writer.writerow(row)
    # if "'string': 'ECG'" in row["alarms"]:
    #     print('ECG_pattern.match(row["alarms"]) = ', row)

        # writer.writerow(row)
    # elif other_pattern.match(row["alarms"]): 
    #     print('other_pattern.match(row["alarms"]) = ', row)
    #     row["alarms"] = ""
    # else: 
    #     # print("else = ", row)

# for row in good_data:
#     # Duplicate timestamps exist within good data
#     if row['timestamp'][:23] in dates: 
#         row["alarms"] = "ECG"
#         writer.writerow(row)
#     else: row["alarms"] = ""
    
