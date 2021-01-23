# print("this is homework")

# #challenge one
# def sum_to(n):
#     sum=0
#     for i in range(1, n+1):
#         sum += i
#     print(sum)
# sum_to(6)


# ## Challenge two
# def largest(list):
#     print(max(list))

# largest([10, 4, 2, 231, 91, 54])

### Challenge three

# def occurances (string, letters):
#     print(string.count(letters))

# occurances('fleep floop', 'e')   # returns 2
# occurances('fleep floop', 'p')   # returns 2
# occurances('fleep floop', 'ee')  # returns 1
# occurances('fleep floop', 'fe')  # returns 0

### Challenge four

def product (*vals):
    product =1
    for val in vals:
        product *=val
        print(product)
product(1,2,3)





