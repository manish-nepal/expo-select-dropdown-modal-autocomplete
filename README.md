# React native expo select dropdown modal with autocomplete search filter


**Props**

_title_ - Default title is **Select Item**, Pass a title to display initially, such as   'Select company', 'Select user', etc, than after you select an item, selected item's display name will be displayed.

_data_ - To render your items on a list, just pass array of objects, _*Note_: only pass arry of objects.

_onSelect_ - Pass a method to select an item. For exapmle, if you have a state like const[selectedCompany, setSelectedCompany] = useState(), just pass setSelectedCompany to onSelect prop.

_displayName_ - Pass a prop as string to displayName for example  displayName={"name"}, in this case name should be a field inside a object you passed on data array, like as 
**data = [{id: 1, name: abc, age: 50}, {id: 2, name: def, age: 25}]**, So now on this object, except for _id_, _name_ and _age_, if you mis-spell or pass a string which is not a field of a object on array, the package will not render anyhing on a modal list.