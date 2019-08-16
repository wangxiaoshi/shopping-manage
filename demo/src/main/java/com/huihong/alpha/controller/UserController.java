package com.huihong.alpha.controller;

import com.huihong.alpha.model.User;
import com.huihong.alpha.service.UserService;
import com.huihong.alpha.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private HttpServletRequest request;

    //创建一个新用户
    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public ResponseEntity<Object> createUser(@RequestBody User user) {

//        System.out.println("DEBUG:新建用户操作");
        userService.createUser(user);

        return ResponseEntity.ok(user);
    }
    //获取所有用户
    @PostMapping("/user/list")
    public ResponseEntity<Object> getAllUser(@RequestBody Page<User> page) {
//        System.out.println("DEBUG: 调用了获取所有用户");
        userService.getAllUser(page);
        return ResponseEntity.ok(page);
    }
    //获取该用户详情
    @GetMapping("/user/{userID}")
    public ResponseEntity<Object> getUser(@PathVariable ("userID") Long userID) {
        return ResponseEntity.ok(userService.getUser(userID));
    }

}
