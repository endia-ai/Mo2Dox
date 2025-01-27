



# functional
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/compile/functional.mojo)  
  

## jit


```swift
jit(arg: Callable, compile_with_MAX: Bool = True) -> Callable
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Jit and cache the given function or Callable.  
</summary>  
  
#### Args:  

* arg `Callable`
* compile_with_MAX `Bool` Default: True
  
#### Returns:  
  
Type: `Callable`  
  
  
</details>

```swift
jit(arg: fn(List[Array]) raises -> Array, compile_with_MAX: Bool = True) -> Callable
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Jit and cache the given function or Callable.  
</summary>  
  
#### Args:  

* arg `fn(List[Array]) raises -> Array`
* compile_with_MAX `Bool` Default: True
  
#### Returns:  
  
Type: `Callable`  
  
  
</details>

```swift
jit(arg: fn(Array) raises -> Array, compile_with_MAX: Bool = True) -> Callable
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Jit and cache the given function or Callable.  
</summary>  
  
#### Args:  

* arg `fn(Array) raises -> Array`
* compile_with_MAX `Bool` Default: True
  
#### Returns:  
  
Type: `Callable`  
  
  
</details>