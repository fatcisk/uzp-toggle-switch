A modern, minimal, clean, and customizable toggle-switch component for React

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmNlMzU4MzgzM2VmZTlhOTJhZmNjYjA2Njc2YWRkNzBiZTIzNzVlZiZjdD1n/BbqXo96g5aG9gBf08f/giphy.gif" />

<img src="https://media.giphy.com/media/BIbZ6jTNcuohvvfJca/giphy.gif" />

- **Easy to Use** - Start using right away!
- **Customizable** - Easy to customize size, color, speed, and more.

## Installation

```bash
npm install uzp-toggle-switch
```

## Usage

```javascript
import React from "react";
import { ToggleSwitch } from "uzp-toggle-switch";

const Example = () => {
  const handleChange = () => {
    console.log("do something");
  };
  return (
    <div className="App">
      <ToggleSwitch onToggle={handleChange} />
    </div>
  );
};
```

## API

| Prop        | Type     | Default      | Description                                                                                     |
| ----------- | -------- | ------------ | ----------------------------------------------------------------------------------------------- |
| onToggle    | function | **Required** | The function passed to this prop will be execuded when users toggle the button.                 |
| isChecked   | bool     | false        | If this value is true, toggle will be on initially.                                             |
| size        | string   | "80px"       | The height of the toggle. The width is calculated automatically based on the height.            |
| onColor     | string   | "#25c625"    | The backgroud color of the toggle button when it is switched on.                                |
| offColor    | string   | "#ffffff"    | The backgroud color of the toggle button when it is switched off.                               |
| handleColor | string   | "#ffffff"    | The color of the circular handle.                                                               |
| speed       | string   | "0.3s"       | The speed of the handle when it travels from the toggle on position to the toggle off position. |

## Example usage of the all available props

```javascript
import React from "react";
import { ToggleSwitch } from "uzp-toggle-switch";

const Example = () => {
  const handleChange = () => {
    console.log("do something");
  };
  return (
    <div className="App">
      <ToggleSwitch
        onToggle={toggle}
        size="80px"
        onColor="green"
        offColor="#f70a0a"
        handleColor="white"
        speed="0.3s"
      />
    </div>
  );
};
```

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Y2MmU2N2E0YmE1NDcxNjc2ZGVjMGNjZDcyZDhhY2FjZjJmZDU3OSZjdD1n/zgFAKCHe8EjhOnNyRz/giphy.gif" />
