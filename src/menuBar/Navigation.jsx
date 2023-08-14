import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    x:0,
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
x:-200
    
    
  }
};

export const Navigation = ({toggle}) => {
  return(
    <motion.ul variants={variants} initial={{x:'-100%'}}>
    {itemIds.map((ele, i) => (
      <MenuItem  i={ele}  key={i} toggle={toggle} />
      ))}
  </motion.ul>
);
}
const arrIcon = [<lord-icon
  src="https://cdn.lordicon.com/kxoxiwrf.json"
  trigger="loop"
  colors="primary:#4be1ec,secondary:#cb5eee"
  style={{width:"50px",height:"40px"}}>
</lord-icon>,<lord-icon
    src="https://cdn.lordicon.com/ljvjsnvh.json"
    trigger="loop"
    colors="primary:#4be1ec,secondary:#cb5eee"
    style={{width:"50px",height:"40px"}}>
</lord-icon>,<lord-icon
    src="https://cdn.lordicon.com/qkmmvfdj.json"
    trigger="loop"
    colors="primary:#4be1ec,secondary:#cb5eee"
    style={{width:"50px",height:"40px"}}>
</lord-icon>,<lord-icon
    src="https://cdn.lordicon.com/hursldrn.json"
    trigger="loop"
    state="loop"
    colors="primary:#4be1ec,secondary:#cb5eee"
    style={{width:"50px",height:"40px"}}>
</lord-icon>,<lord-icon
     src="https://cdn.lordicon.com/egpbfgcp.json"
    trigger="loop"
    colors="primary:#4be1ec,secondary:#cb5eee"
    style={{width:"50px",height:"50px"}}>
</lord-icon>]
const itemIds = [{nameEle:'Home',topath:'/',color:'border-c1',icon:arrIcon[0]},{nameEle:'About',topath:'about',color:'border-c2',icon:arrIcon[1]},{nameEle:'Projects',topath:'projects',color:'border-c3',icon:arrIcon[2]},{nameEle:'My Bolg',topath:'blog',color:'border-c4',icon:arrIcon[3]},{nameEle:'Contact',topath:'contact',color:'border-c5',icon:arrIcon[4]}];
