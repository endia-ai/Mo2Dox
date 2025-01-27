



# functional
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/autograd/functional.mojo)  
  

## backward


```swift
backward(arg: Array, create_graph: Bool)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Performs backward propagation on the given Array.  
</summary>  
  
#### Args:  

* arg `Array`
* create_graph `Bool`
  
  
</details>
## jacrev


```swift
jacrev(arg: Array, create_graph: Bool)
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the reverse-mode Jacobian for the given Array.  
</summary>  
  
#### Args:  

* arg `Array`
* create_graph `Bool`
  
  
</details>
## grad


```swift
grad(outs: List[Array], inputs: List[Array], retain_grads: Bool = True, create_graph: Bool = False) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes gradients of outputs with respect to inputs.  
</summary>  
  
#### Args:  

* outs `List[Array]`
* inputs `List[Array]`
* retain_grads `Bool` Default: True
* create_graph `Bool` Default: False
  
#### Returns:  
  
Type: `List[Array]`  
  
  
</details>

```swift
grad(f: Callable, argnums: List[Int] = List(-1)) -> Callable
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the gradient of a Callable function with respect to specified arguments.  
</summary>  
  
#### Args:  

* f `Callable`
* argnums `List[Int]` Default: List(-1)
  
#### Returns:  
  
Type: `Callable`  
  
  
</details>

```swift
grad(f: fn(List[Array]) raises -> Array, argnums: List[Int] = List(-1)) -> Callable
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the gradient of a function that takes a list of Arrays and returns an Array.  
</summary>  
  
#### Args:  

* f `fn(List[Array]) raises -> Array`
* argnums `List[Int]` Default: List(-1)
  
#### Returns:  
  
Type: `Callable`  
  
  
</details>

```swift
grad(f: fn(Array) raises -> Array, argnums: List[Int] = List(-1)) -> Callable
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the gradient of a function that takes a single Array and returns an Array.  
</summary>  
  
#### Args:  

* f `fn(Array) raises -> Array`
* argnums `List[Int]` Default: List(-1)
  
#### Returns:  
  
Type: `Callable`  
  
  
</details>
## jacobian


```swift
jacobian(f: Callable, argnums: List[Int] = List(-1)) -> Callable
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the Jacobian of a Callable function with respect to specified arguments.  
</summary>  
  
#### Args:  

* f `Callable`
* argnums `List[Int]` Default: List(-1)
  
#### Returns:  
  
Type: `Callable`  
  
  
</details>

```swift
jacobian(f: fn(List[Array]) raises -> Array, argnums: List[Int] = List(-1)) -> Callable
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the Jacobian of a function that takes a list of Arrays and returns an Array.  
</summary>  
  
#### Args:  

* f `fn(List[Array]) raises -> Array`
* argnums `List[Int]` Default: List(-1)
  
#### Returns:  
  
Type: `Callable`  
  
  
</details>

```swift
jacobian(f: fn(Array) raises -> Array, argnums: List[Int] = List(-1)) -> Callable
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the Jacobian of a function that takes a single Array and returns an Array.  
</summary>  
  
#### Args:  

* f `fn(Array) raises -> Array`
* argnums `List[Int]` Default: List(-1)
  
#### Returns:  
  
Type: `Callable`  
  
  
</details>

```swift
jacobian(f: Callable, args: List[Array]) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the Jacobian of a Callable function with respect to given arguments.  
</summary>  
  
#### Args:  

* f `Callable`
* args `List[Array]`
  
#### Returns:  
  
Type: `List[Array]`  
  
  
</details>

```swift
jacobian(f: fn(List[Array]) raises -> Array, args: List[Array]) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the Jacobian of a function that takes a list of Arrays with respect to given arguments.  
</summary>  
  
#### Args:  

* f `fn(List[Array]) raises -> Array`
* args `List[Array]`
  
#### Returns:  
  
Type: `List[Array]`  
  
  
</details>

```swift
jacobian(f: fn(Array) raises -> Array, arg: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the Jacobian of a function that takes a single Array with respect to the given argument.  
</summary>  
  
#### Args:  

* f `fn(Array) raises -> Array`
* arg `Array`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## hessian


```swift
hessian(f: Callable, argnums: List[Int] = List(-1)) -> Callable
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the Hessian of a Callable function with respect to specified arguments.  
</summary>  
  
#### Args:  

* f `Callable`
* argnums `List[Int]` Default: List(-1)
  
#### Returns:  
  
Type: `Callable`  
  
  
</details>

```swift
hessian(f: fn(List[Array]) raises -> Array, argnums: List[Int] = List(-1)) -> Callable
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the Hessian of a function that takes a list of Arrays and returns an Array.  
</summary>  
  
#### Args:  

* f `fn(List[Array]) raises -> Array`
* argnums `List[Int]` Default: List(-1)
  
#### Returns:  
  
Type: `Callable`  
  
  
</details>

```swift
hessian(f: fn(Array) raises -> Array, argnums: List[Int] = List(-1)) -> Callable
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the Hessian of a function that takes a single Array and returns an Array.  
</summary>  
  
#### Args:  

* f `fn(Array) raises -> Array`
* argnums `List[Int]` Default: List(-1)
  
#### Returns:  
  
Type: `Callable`  
  
  
</details>

```swift
hessian(f: Callable, args: List[Array]) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the Hessian of a Callable function with respect to given arguments.  
</summary>  
  
#### Args:  

* f `Callable`
* args `List[Array]`
  
#### Returns:  
  
Type: `List[Array]`  
  
  
</details>

```swift
hessian(f: fn(List[Array]) raises -> Array, args: List[Array]) -> List[Array]
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the Hessian of a function that takes a list of Arrays with respect to given arguments.  
</summary>  
  
#### Args:  

* f `fn(List[Array]) raises -> Array`
* args `List[Array]`
  
#### Returns:  
  
Type: `List[Array]`  
  
  
</details>

```swift
hessian(f: fn(Array) raises -> Array, arg: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the Hessian of a function that takes a single Array with respect to the given argument.  
</summary>  
  
#### Args:  

* f `fn(Array) raises -> Array`
* arg `Array`
  
#### Returns:  
  
Type: `Array`  
  
  
</details>
## value_and_grad


```swift
value_and_grad(arg: Variant[Callable, fn(List[Array]) raises -> Array], argnums: List[Int] = List(-1)) -> Callable
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes both the value and gradient of a function or Callable with respect to specified arguments.  
</summary>  
  
#### Args:  

* arg `Variant[Callable, fn(List[Array]) raises -> Array]`
* argnums `List[Int]` Default: List(-1)
  
#### Returns:  
  
Type: `Callable`  
  
  
</details>