class Stack(object):

    def __init__(self):
        self.items = []
        self.length = 0

    def pop(self):
        if self.length == 0:
            return None
        self.length -= 1
        return self.items.pop()

    def push(self, item):
        self.length += 1
        self.items.append(item)


class Queue(object):

    def __init__(self):
        self.popStack = Stack()
        self.pushStack = Stack()

    def push(self, item):

        popStack = self.popStack
        pushStack = self.pushStack

        if self.popStack.length > 0:
            while self.popStack.length > 0:
                el = self.popStack.pop()
                self.pushStack.push(el)

        self.pushStack.push(item)
    
    # alternatively, push to popStack only if empty, otherwise just pop from 
    # popStack
    def pop(self):

        popStack = self.popStack
        pushStack = self.pushStack

        if self.pushStack.length > 0:
            while self.pushStack.length > 0:
                el = self.pushStack.pop()
                self.popStack.push(el)

        return self.popStack.pop()

q = Queue()

q.push(1)
q.push(2)
q.push(3)
q.push(4)
q.push(5)

print q.pop()
print q.pop()