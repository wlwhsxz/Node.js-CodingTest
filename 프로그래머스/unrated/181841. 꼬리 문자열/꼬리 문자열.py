def solution(str_list, ex):
    answer = ''
    for some_string in str_list:
        if not ex in some_string:
            answer += some_string
    return answer