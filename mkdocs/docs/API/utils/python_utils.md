



# python_utils
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/utils/python_utils.mojo)  
  

## memcpy_to_numpy


```swift
memcpy_to_numpy(array: PythonObject, tensor: Array)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* array `PythonObject`
* tensor `Array`
  
  
</details>
## shape_to_python_list


```swift
shape_to_python_list(shape: List[Int]) -> PythonObject
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* shape `List[Int]`
  
#### Returns:  
  
Type: `PythonObject`  
  
  
</details>
## get_np_dtype


```swift
get_np_dtype[dtype: DType](np: PythonObject) -> PythonObject
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
Parameters:  

* dtype `DType`
  
#### Args:  

* np `PythonObject`
  
#### Returns:  
  
Type: `PythonObject`  
  
  
</details>
## array_to_numpy


```swift
array_to_numpy(tensor: Array, np: PythonObject) -> PythonObject
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* tensor `Array`
* np `PythonObject`
  
#### Returns:  
  
Type: `PythonObject`  
  
  
</details>
## tensor_to_array


```swift
tensor_to_array(owned src: Tensor[float32]) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Show more details.  
</summary>  
  
#### Args:  

* src `Tensor[float32]`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>