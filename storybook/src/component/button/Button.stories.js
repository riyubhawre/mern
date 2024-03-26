import React from "react";
import Button from "./Button";

export default{
    title:'PSK/Button',
    component:Button,
    decorators:[story=><center>{story()}</center>]
}

export const Primary=()=><Button variant = 'primary'>primary/blue</Button>
export const Secondary=()=><Button variant = 'secondary'>secondary/grey</Button>
export const Success=()=><Button variant = 'success'>success/green</Button>
export const Danger=()=><Button variant = 'danger'>danger/red</Button>
export const Warning=()=><Button variant = 'warning'>warning/yellow</Button>