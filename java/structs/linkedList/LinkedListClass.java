import java.utils.*;


/**
 * Basic definition of a linked list uding the node class
 * Linked list has: Head, Tail, connection of nodes
 */
public class LinkedList<T>{

    /**
     * Basic definition for a node class for a singly linked list
     * using 
    */
    public class Node{
        public T data;
        public Node nextNode;
        public Node(T data) {
            this.data = data;
            this.nextNode = null;
        }
    }
    
    public Node headNode;
    public int size;
    
    /**
     * @Constructor
     */
    public LinkedList() {
        this.headNode = null;
        this.size = 0;
    }

    /**
     * Static methods
    */

    /**
     * Find out if the list is empty
     * @Params {none}
     * @Returns {True(empty), False(not Empty)}
     */
    public static boolean isEmpty() {
        // if the head node is null the list is empty
        // so return true. Otherwise there's atleast
        // one node so return false;

        return this.headNode == null;
    }

    /**
     * Search the list for a node matching the
     * passed in data value. If no node is found
     * return NULL
     * @Params {data<T>}
     * @Returns {True(node is found), False(Node not found)}
    */
    public static boolean search(T data) {
        if (this.isEmpty()) return false;

        Node pointer = this.headNode;
        while (pointer != null) {
            if (pointer.data.equals(data)) return true;
            pointer = pointer.nextNode;
        }

        return false;
    }

    /**
     * Insert at head
     * @Params (data(<T>)) Insert the passed in element
     * as the new head of the list
     */
    public static void insertAtHead(T data) {
        // create a reference to the old head and 
        // assign the new node to the head with its
        // next being the old head. Finally, incerement
        // the list size

        Node newNode = new Node(data);
        Node oldHead = this.headNode;
        newNode.nextNode = oldHead;
        this.headNode = newNode;
        this.size++;
    }

    /**
     * Insert at the passed in element at the end of the list
     * @Params {data<T>}
     * @Returns void
    */
    public static void insertAtEnd(T data) {
        // if the list is empty intitialize the head using the passed in data
        // otherwise find the last node and insert a new node with the data
        // after the final node

        if (this.isEmpty()) {
            this.insertAtHead(data);
            return;
        } 
    
        Node pointer = this.headNode;
        while (pointer.nextNode != null) {
            pointer = pointer.nextNode;
        }
        Node newNode = new Node(data);
        pointer.nextNode = newNode;
        this.size++;
    }

    /**
     * Insert After
     * Find the node where the data matches the inputed
     * data and insert a new node with the passed in data<T> after it
     * @Params {data(T)}
     * @Returns
     */
    public static void insertAfter(T data, T previous) {
        // insert a new node containind the passed in element
        // after the node where the data matches the previous param
        // if none match do not insert

        if (this.headNode == null) return;
        Node pointer = this.headNode;

        while (pointer != null && !pointer.data.equals(previous)) {
            pointer = pointer.nextNode;
        }

        if (pointer != null) {
            Node newNode = new Node(data);
            newNode.nextNode = pointer.nextNode;
            pointer.nextNode = newNode;
            size++;
        }
    }

    /**
     * delete the first instance where the node
     * value matches the passed in data
     * @Params {T data, T previos}
     * @Retruns {none}
     */
    public static void delete(T data) {
        // Find the node where the node data matches the passed in
        // data and delete that node from the list. If the list is
        //  empty there's nothing to do.

        if (this.isEmpty()) return;

        Node prev = this.headNode;
        if (prev.data.equals(data)) {
            this.deleteAtHead();
            return;
        }
        Node nodeToDelete = this.headNode.next;
        while (nodeToDelete != null && !nodeToDelete.data.equals(data)) {
            nodeToDelete = nodeToDelete.nextNode;
            prev = prev.next;
        }

        if (nodeToDelete != null) {
            prev.nextNode = nodeToDelete.next;
            nodeToDelete = null;
        }

    }

    /**
     * Delete the head of the list and return the node
     * value. If the list is empty return null
     * @Params {none}
     * @Returns {data<T> or  NULL}
     */
    public static void deleteAtHead() {
        // delete the head value if one exists
        // assign the new head to the next of  the previous head

        if (this.isEmpty()) return null;

        this.headNode = this.headNode.nextNode;
        this.size--;
    }

    /**
     * Delete the tail node of the list. If the
     * list is empty return an empty return null
     * @Params {none}
     * @Returns {date<T> or NULL}
    */
    public static void deleteAtEnd() {
        // Delete the last node only if the list is not empty

        if (this.isEmpty()) return;

        Node current = this.headNode;
        Node prev = null;
        while (current.nextNode != null) {
            prev = current;
            current = current.nextNode;
        }
        prev.nextNode = null;
        current = null;
    }

}