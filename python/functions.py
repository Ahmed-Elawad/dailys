## basic definition
# def function_name(arguments): <- !!!colon is neccesary!!!
    # function code
    # return statement <- not neccessary
def add_one(number):
    return number + 1

print(add_one(1))

## lambda
# keyword argument1, argument2 : fuctionality
# !! Commonly assigned to a variable
# !! CAN ONLY HAVE A SINGLE LINE EXPRESSION -> THINK  OF ES6 arrow methods(the one liners)
my_lambda_definition = lambda num1, num2: num1 + num2
print(my_lambda_definition(1, 1))

## conditional lambda
# think of terinary operators in JS true ? 'it's true' : 'it's false' same as 'return this' if 'this' else 'return this'
lambda_with_conditional = lambda num1, num2 : 'Num 1 is larger' if num1 > num2 else 'num2 may be larger'
print(lambda_with_conditional(1, 2))


## functions as arguments
# basic calculator

def add(num1, num2):
    return num1 + num2

def subtract(num1, num2):
    return num1 - num2

def multiply(num1, num2):
    return num1 * num2

def divide(num1, num2):
    return num1 / num2

def calculator(operation, n1, n2):
    return operation(n1, n2)

print(calculator(add, 0, 1))
print(calculator(divide, 2, 2))
print(calculator(subtract, 2, 1))
print(calculator(multiply, 1, 1))

## ORRRRRRRR use a nice way with an anonymouse finction
# sound familier ;)
print(calculator(lambda n1, n2: n1 * n2, 1, 1))


## map()
# API: map(function, list) -> once again anaonymouse inline function
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 298479802734981729387103]
print(map(lambda value: 1, my_list)) ## I like my ones ;)

## filter
# API: filter(function, list) -> another common implementation
# returns a filtered object
# convet to list using list()
print(filter(lambda value: value < 2, my_list))


## range
# returns a list of values
# range(start, end, step)
# range(1, 10, 2) -> [1, 3, 5, 7, 9]
print(range(1, 10, 2))