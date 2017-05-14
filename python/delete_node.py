class LinkedListNode:

    def __init__(self, value):
        self.value = value
        self.next = None
    
    def delete_node(self, value):
      print(self.value)
      self.value = self.next
      self.value = self.next
      # A -> B -> C
      # self.next =


a = LinkedListNode('A')
b = LinkedListNode('B')
c = LinkedListNode('C')

a.next = b
b.next = c

LinkedListNode.delete_node('B')
