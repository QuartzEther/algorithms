
//------------My solution------------
// function maxPath(root){
//     let max = -Infinity;
    
//     const maxGain = (root) => {
//         if(!root) return 0;
    
//         let tmpL = maxGain(root.left), tmpR = maxGain(root.right);
//         if (tmpL < 0) tmpL = 0;
//         if (tmpR < 0) tmpR = 0;
        
//         let fullNode = root.val+tmpL+tmpR;
        
//         let tmpMax = fullNode > root.val+tmpL && fullNode > root.val+tmpR ? fullNode : tmpL>tmpR ? root.val+tmpL : root.val+tmpR;
        
//         if (max<tmpMax) max = tmpMax;
        
//         return tmpL>tmpR ? root.val+tmpL : root.val+tmpR;
//     }
    
//     maxGain(root);
//     return max;
// }
//-----------------------------------
// Путь в бинарном дереве — это последовательность узлов, в которой каждая
// пара соседних узлов в последовательности имеет соединяющее их ребро.
// Узел может появиться в последовательности не более одного раза . Обратите 
// внимание, что путь не обязательно должен проходить через корень. 
// Сумма путей пути — это сумма значений узлов пути. 
// Учитывая rootбинарное дерево, вернуть максимальную сумму пути любого непустого пути.

// Сумма максимального пути двоичного дерева

function maxPathSum(root) { 
    let maxSum = Number.NEGATIVE_INFINITY; 
 
    function maxGain(node) { 
        if (node === null) { 
            return 0; 
        } 
         
        const leftGain = Math.max(maxGain(node.left), 0); 
        const rightGain = Math.max(maxGain(node.right), 0); 
 
        const value = node.val + leftGain + rightGain; 
        maxSum = Math.max(maxSum, value); 
         
        return node.val + Math.max(leftGain, rightGain); 
    } 
 
    maxGain(root); 
    return maxSum; 
}