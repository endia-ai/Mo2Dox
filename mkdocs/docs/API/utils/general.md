



# general
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/utils/general.mojo)  
  

## InplaceInfo
  
  
  

### Parent Traits
  

- AnyType
- CollectionElement
- Copyable
- Movable
- UnknownDestructibility

### Fields
  
  
* type `Int`  
* idx `Int`  
* arg_id `Int`  

### Functions

#### __init__


```swift
__init__(out self, type: Int, idx: Int, arg_id: Int = -1)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* self `Self`
* type `Int`
* idx `Int`
* arg_id `Int` Default: -1
  
  
</details>
## reset_node_id_recursive


```swift
reset_node_id_recursive(mut curr: Array)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* curr `Array`
  
  
</details>
## top_order_rec


```swift
top_order_rec(mut curr: Array, mut trace: List[Array])
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* curr `Array`
* trace `List[Array]`
  
  
</details>
## zero_grad_recursive


```swift
zero_grad_recursive(mut curr: Array)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* curr `Array`
  
  
</details>
## zero_grad_rec


```swift
zero_grad_rec(mut curr: Array)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* curr `Array`
  
  
</details>
## remove_grad_recursive


```swift
remove_grad_recursive(mut curr: Array)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* curr `Array`
  
  
</details>
## remove_grad_rec


```swift
remove_grad_rec(mut curr: Array)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* curr `Array`
  
  
</details>
## concat_lists


```swift
concat_lists(*lists: List[Int]) -> List[Int]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* \*lists `List[Int]`
  
#### Returns:  
  
Type: `List[Int]`  
  
  
</details>
## list_contains


```swift
list_contains(list: List[Int], val: Int) -> Bool
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Checks if a list fo Ints contains a specific value.  
</summary>  
  
#### Args:  

* list `List[Int]`: The list of Ints to check.
* val `Int`: The value to check for.
  
#### Returns:  
  
True if the value is in the list, False otherwise.  
Type: `Bool`  
  
  
</details>