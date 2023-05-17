// Node factory, containing a value property and a link to the nextNode.
export default function Node(value = null, nextNode = null) {
  return { value, nextNode };
}
