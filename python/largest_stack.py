class Stack:

    # initialize an empty list
    def __init__(self):
        self.items = []

    # push a new item to the last index
    def push(self, item):
        self.items.append(item)

    # remove the last item
    def pop(self):
        # if the stack is empty, return None
        # (it would also be reasonable to throw an exception)
        if not self.items:
            return None
        return self.items.pop()

    # see what the last item is
    def peek(self):
        if not self.items:
            return None
        return self.items[-1]

""" Stack that keeps track of maximum value """
class MaxStack(Stack):

    def __init__(self):
        Stack.__init__(self)
        # instead of having separate variable can just read from stack of max
        # values
        self.new_max = None
        self.old_max = Stack()

    def push(self, item):
        Stack.push(self, item)
        if item > self.new_max:
            self.old_max.push(self.new_max)
            self.new_max = item

    def pop(self):
        elem = Stack.pop(self)
        if self.new_max == elem:
            self.new_max = self.old_max.pop()
        return elem

    def get_max(self):
        return self.new_max
