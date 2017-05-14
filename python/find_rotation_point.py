def getMidPoint(lowerBound, upperBound):
    return int((lowerBound + upperBound) / 2)

def findRotationPoint(words):

    first_word = words[0]
    guess_index = getMidPoint(0, len(words))

    while words[guess_index] > words[guess_index-1]:
        guess_word = words[guess_index]
        if guess_word > first_word:
            guess_index = getMidPoint(guess_index, len(words))
        else:
            guess_index = getMidPoint(0, guess_index)

    return guess_index

words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  # <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]

print(words.index('asymptote'))
print(findRotationPoint(words))  # => 5
