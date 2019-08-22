package com.huihong.alpha.controller;

import com.huihong.alpha.model.User;
import com.huihong.alpha.model.UserRole;
import com.huihong.alpha.service.UserRoleService;
import com.huihong.alpha.service.UserService;
import com.huihong.alpha.util.Constant;
import com.huihong.alpha.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRoleService userRoleService;
    @Autowired
    private HttpServletRequest request;


    //创建一个新用户
    @RequestMapping(value = "/user", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('user_create')")
    public ResponseEntity<Object> createUser(@RequestBody User user) {
        //创建用户
        userService.createUser(user);
        //分配角色
        UserRole userRole = new UserRole(user.getUserName(), Long.valueOf(user.getUserRole()));
        userRoleService.createUserRole(userRole);

        return ResponseEntity.ok(user);
    }

    //获取所有用户
    @PostMapping("/user/list")
    @PreAuthorize("hasAuthority('user_search')")
    public ResponseEntity<Object> getAllUser(@RequestBody Page<User> page) {
        userService.getAllUser(page);
        return ResponseEntity.ok(page);
    }

    //获取该用户详情
    @GetMapping("/user/{userID}")
    @PreAuthorize("hasAuthority('user_search')")
    public ResponseEntity<Object> getUser(@PathVariable ("userID") Long userID) {
        return ResponseEntity.ok(userService.getUser(userID));
    }

    //更改用户信息
    @PutMapping("/user")
    @PreAuthorize("hasAuthority('user_edit')")
    public ResponseEntity<Object> updateUser(@RequestBody User user) {
        //更新用户表
        userService.updateUser(user);
        //更新用户角色列表
        UserRole userRole = new UserRole(user.getUserName(), Long.valueOf(user.getUserRole()));
        userRoleService.updateUserRole(userRole);
        return ResponseEntity.ok(Constant.SUCCESS);
    }

    //删除指定用户
    @DeleteMapping("/user/{userID}")
    @PreAuthorize("hasAuthority('user_delete')")
    public ResponseEntity<Object> deleteUser(@PathVariable ("userID") Long userID) {
        //先删除用户角色的对应
        User user = userService.getUser(userID);
        userRoleService.deleteUserRole(user.getUserName());
        //再删除用户
        userService.deleteUser(userID);
        return ResponseEntity.ok(Constant.SUCCESS);
    }

    //获取符合搜索关键字的用户
    @PostMapping("/user/list/{keyword}")
    @PreAuthorize("hasAuthority('user_search')")
    public ResponseEntity<Object> getUserBy(@PathVariable ("keyword") String keyword, @RequestBody Page<User> page) {
//        System.out.println("接到前端搜索用户请求后缀: " + keyword);
        userService.getUserBy(keyword, page);
        return ResponseEntity.ok(page);
    }


}
