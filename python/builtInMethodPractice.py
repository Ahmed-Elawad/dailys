## built in string methods
my_string = "Try to parse and mutate the string"

## search 
# find the starting index of a substr
# findAPI: find(substr, start, end) // start , end = search window perameters
index_of_to = my_string.find('to')
print('Starting index for "to" is:', index_of_to) ## logs ('Starting index for "to" is:', 4)

## replace
# search for a substring in a string
# replace that instace with a passed in string
# replaceAPI: string.replace(sub_string_to_be_replaced, new_string_to_be_added)
new_string = my_string.replace('parse', 'iterate')
print('Old string:', my_string)
print('New string:', new_string)


## Change casing
# use upper(), lower() to change casings
# api: string_to_change.upper(), string_to_change.lower()
print(my_string.upper())
print(my_string.lower())


## Type conversion
# convert string to number
# !!WARNING -> stiring must contain numbers for succesful conversion
# API: int(string_to_be_converted)
my_number_string = '10'
print('String before change', my_number_string)
print('String after change', int(my_number_string))

# convert string to unicode
# API: ord(character)
unicode_string = ord(my_string[1])
print('String before unicode',  my_string[1])
print('String after unicode',  unicode_string)

# convert num to float
# API float(num)
integer = 10
floating_number = float(integer)
print('Integer:', integer)
print('Float version:', floating_number)

# boolean
# bool(input)
# 0, empty string -> FALSE
# strings, nums != 0 -> TRUE
print('Bool of 0:', bool(0))
print('Bool of 1:', bool(1))
print('Bool of "Hi":', bool("Hi"))
print('Bool of "":', bool(""))