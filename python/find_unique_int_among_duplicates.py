ids = range(100) + range(99)  # id 99 is unique
print reduce(lambda x, y: x ^ y, ids)
