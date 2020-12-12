## You must implement the check_sum() function which 
# takes in a list and returns True if the sum of two 
# numbers in the list is zero. If no such pair exists,
# return False.

def check_sum(num_list):
    i = 1
    for num_1 in num_list:
        for num_2 in num_list[i:]:
            if num_1 + num_2 == 0:
                return True
        check_sum(num_list[i:])
        
    return False

print(check_sum([10, -14, 26, 5, -3, 13, -5])) # True
print(check_sum([10, -14, 26, 5, -3])) # False
