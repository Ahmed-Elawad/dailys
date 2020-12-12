## a loop is a control that is used to perform a set of instructions
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
## for loops
for num in my_list:
    if num % 2 == 0:
        print(num)
    else:
        print('Num is odd')
## while loops
iterator = 0

while iterator < len(my_list) - 1:
    print(my_list[iterator])
    iterator+= 1
