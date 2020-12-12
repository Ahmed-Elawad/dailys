## Given a string containing only square brackets, [], you must check 
# whether the brackets are balanced or not. The brackets are said 
# to be balanced if, for every opening bracket, there is a closing bracket.
#
# You will write your code in the check_balance() function, which returns
# True if the brackets are balanced and False if they are not.
#
# For an empty string, the function will return True.
#
# For the sake of simplicity, you can assume that the string will not contain any other characters.

def check_balance(string):
    num_of_opening_brackets = 0

    for bracket in string:
        if bracket == ']':
            print(bracket)
            num_of_opening_brackets -= 1
        else:
            num_of_opening_brackets += 1
        
    if not num_of_opening_brackets:
        return True
    return False

result = check_balance('[[[]]][]')
print(result)