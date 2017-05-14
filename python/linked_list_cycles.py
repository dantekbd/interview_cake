class LinkedListNode:

    def __init__(self, value):
        self.value = value
        self.next = None


def contains_cycle(node):

    fast_runner = node
    slow_runner = node
    laps = 0

    while fast_runner.next != None or laps > 1:

        print laps

        fast_runner = node.next.next
        slow_runner = node.next

        if fast_runner.value == slow_runner.value:
            laps += 1

    return laps > 1


a = LinkedListNode('a')
b = LinkedListNode('b')
c = LinkedListNode('c')
# d = LinkedListNode('d')
# e = LinkedListNode('e')
# f = LinkedListNode('f')

a.next = b
b.next = c
c.next = a
# d.next = e
# e.next = f

print a.value
print a.next.value
print a.next.next.value
print a.next.next.next

print contains_cycle(a)