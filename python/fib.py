## As we saw earlier, the Fibonacci sequence is a series of numbers
# where every number is the sum of the two numbers before it.
# The first two numbers are 0 and 1:

# Example: 0 1 1 2 3 5 8 13

# You must write the fib() function which takes in a positive integer, n,
# and returns the n-th Fibonacci number.

def fib(n):
    if not n or n < 0:
        return -1
    first_num = 0
    second_num = 1
    fib_num = first_num + second_num
    n -= 3
    while n:
     
        first_num = second_num
        second_num = fib_num
        fib_num = second_num + first_num
        n -= 1
    return fib_num


print(fib(7)) # 8
print(fib(3)) # 1
print(fib(55)) # 1

