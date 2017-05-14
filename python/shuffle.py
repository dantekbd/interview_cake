import random

def get_random(floor, ceiling):
    return random.randint(floor, ceiling)

def shuffle(listToShuffle):
    """
    Basic idea is to ensure that each possible outcome has equal chance of
    occuring, where number of outcomes is len(listToShuffle)! Do this by 
    choosing item from list, then choosing from the remaining items in list
    This is an example of
    [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
    """

    length = len(listToShuffle)-1

    for a in range(length):
        b = get_random(a, length)
        listToShuffle[a], listToShuffle[b] = listToShuffle[b], listToShuffle[a]

    return listToShuffle


print shuffle([0, 1, 2])
