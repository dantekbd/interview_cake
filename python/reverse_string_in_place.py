def reverse(s):

    l = list(s)
    length = len(l)
    mid = length / 2

    for i in range(mid):
        idxToSwap = length-1-i
        l[i], l[idxToSwap] = l[idxToSwap], l[i]

    return ''.join(l)


s = 'abcdefg'  # => gfedcba
print reverse(s)
