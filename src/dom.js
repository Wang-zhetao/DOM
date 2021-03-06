window.dom = {
    create(sting){
        const container = document.createElement("template")
        container.innerHTML = sting.trim()
        return container.content.firstChild;
    },
    after(node,node2){
        node.parentNode.insertBefore(node,node.nextSibling);
    },
    before(node,node2){
        node.parentNode.insertBefore(node2,node);
    },
    append(parent,node){
        parent.appendChild(node);
    },
    wrap(node,parent){
        dom.before(node,parent)
        dom.append(parent,node)
    },
    remove(node){
        node.parentNode.removeChild(node)
        return node
    },
    empty(node){
        const array = []
        let x = node.firstChild
        while(x){
            array.push(dom.remove(node,firstChild))
            x = node.firstChild
        }
        return array
    },
    attr(node,name,value){
        // 重载
        if(arguments.length === 3){
            node.setAttribute(name,value)
        }else if(arguments.length === 2){
            return node.getAttribute(name)
        }
    },
    text(node,string){ // 适配
        if(arguments.length === 2){
            if('innerText' in node){
                node.innerText = string
            }else{
                node.textContent = string
            }
        }else if(arguments.length === 1){
            if('innerText' in node){
                return node.innerText
            }else{
                return node.textContent
            }
        }
    },
    html(node,string){
        if(arguments.length === 2){
            node.innerHTML = string
        }else if(arguments.length === 1){
            return node.innerHTML
        }
    },
    style(node,name,value){
        if(arguments.length === 3){
            // dom.style(div,{color:'red'})
            const object = name
            for(let key in object){
                node.style[key] = object[key]
            }
        }
    }
}
