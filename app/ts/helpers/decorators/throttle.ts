export function throttle(milissegundos: number = 500) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;

        let timer =  0; 
        
        descriptor.value  = function(...args:any[]){
            window.addEventListener('click', event=> event.preventDefault());
//            if(event) event.preventDefault();
            clearInterval(timer)
            timer = setTimeout( () => metodoOriginal.apply(this,args), milissegundos);
       
        }

        return descriptor; 
    }
    
}