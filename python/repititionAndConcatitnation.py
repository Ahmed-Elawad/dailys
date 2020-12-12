## write a function that takes two arguments
## and returns the arguments converted to strings 
## with the second argumants repeated string concatinated to the first

def repatedConcatitnation(num_1, num_2):

    def build_string(timesLeft, string, num):
        if timesLeft:
            string = build_string(timesLeft-1, string+ str(num), num)
        return string

    string_1 = build_string(num_1, '', num_1)
    string_2 = build_string(num_2, '', num_2)

    return string_1 + string_2

print(repatedConcatitnation(2, 2))
