import json
from pprint import pprint

def extract_diff(json):
    try:
        # Also convert to int since update_time will be string.  When comparing
        # strings, "10" is smaller than "2".
        return float(json['difference'])
    except KeyError:
        return 0

with open('department.json') as data_file:    
    all_data = json.load(data_file)

for element in all_data: 
        del element['employee_count']
        del element['female_1']
        del element['female_2']
        del element['female_total_salary']
        del element['male_1']
        del element['male_2']
        del element['year']
        del element['male_total_salary']
        del element['payroll_to_men']
        del element['payroll_to_women']
        del element['total_payroll']

        diff = float(element['male_average_salary']) - float(element['female_average_salary'])
        element['difference'] = str("{0:.2f}".format(round(diff,2)))

all_data.sort(key=extract_diff, reverse=True)

pprint(all_data)