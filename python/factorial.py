def factorial(x):
    if not x or x == 1:
        return 1
    if x < 0:
        return -1
    return x * factorial(x-1)
    

print(factorial(1))
print(factorial(0))
print(factorial(2))
print(factorial(-1))
print(factorial(-10))
print(factorial(3))
