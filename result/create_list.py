import json
import os
from collections import defaultdict

import nlp2
import nlprep

data_dict = defaultdict(lambda: defaultdict(dict))
output_dict = defaultdict(list)
FILE_TEST = [i for i in os.listdir('./') if ".jsonl" in i]
# {'answers': ['a'], 'options': [['a','b']], 'questions': ['q1'], 'article': "", 'id': 'middle2572.txt'}
print(FILE_TEST)
print("====size====")
# count total size of each prediction
for FILE in FILE_TEST:
    with open(os.path.join('./', FILE), 'r', encoding='utf8') as jsonlfile:
        for jlines in jsonlfile.readlines():
            jfile = json.loads(jlines)
            for q in jfile['questions']:
                dict_id = jfile['article'].strip() + q.strip()
                dict_id = dict_id.replace(" ", "").lower()
                data_dict[dict_id][FILE] = jfile

ans_list = ["a", "b", "c", "d"]
for data in data_dict.values():
    merge_dict = defaultdict(dict)
    for key, value in data.items():
        dist_key = "model" if "_rank" in key else "human"
        merge_dict['id'] = value['id']
        merge_dict['article'] = value['article']
        merge_dict['questions'] = value['questions'][0]
        merge_dict['options'][dist_key] = value['options'][0]
        merge_dict['answer'][dist_key] = ans_list.index(value['answers'][0])

    with open(os.path.join(nlp2.get_dir_with_notexist_create('../public/distractors/'), merge_dict['id'] + '.json'),
              'w',
              encoding='utf8') as f:
        json.dump(merge_dict, f, ensure_ascii=False)
