<template>
  <div class="container">
    <div class="search-box">
      <input type="text" />
      <span></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  transform: translate(-50%);
}

.search-box {
  input[type="text"] {
    border: none;
    background: none;
    z-index: 1;
    width: 25px;
    height: 25px;
    transition: all 0.25s ease-in 0.25s;
    color: transparent;
    font-size: 0.75rem;
    line-height: 25px;
    &:hover {
      cursor: pointer;
      &:focus {
        cursor: text;
      }
      + span {
        background: rgba(255, 255, 255, 0.2);
      }
    }
    &:focus {
      width: 200px;
      padding: 0 10px;
      outline: none;
      color: black;
      background: none;
      color: white;
      + span {
        width: 200px;
        &::before {
          width: 2px;
          opacity: 0;
          transition: all 0.25s ease-in;
        }
      }
    }
    + span {
      z-index: -1;
      position: absolute;
      border: 2px solid white;
      top: 13;
      width: 25px;
      height: 25px;
      transition: all 0.25s ease-in 0.25s;
      border-radius: 25px;
      left: 0;
      &::before {
        transition: all 0.25s ease-in 0.5s;
        transform-origin: left top;
        content: "";
        position: absolute;
        width: 10px;
        height: 5px;
        border-radius: 5px;
        background: white;
        transform: rotate(45deg) translate(26px, -2px);
      }
    }
  }
}
</style>
