package com.huihong.alpha.controller;

import com.huihong.alpha.dao.RolePermissionDao;
import com.huihong.alpha.model.RolePermission;
import com.huihong.alpha.model.User;
import com.huihong.alpha.service.RolePermissionService;
import com.huihong.alpha.service.UserRoleService;
import com.huihong.alpha.util.Constant;
import com.huihong.alpha.util.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class AuthController {
    @Autowired(required = false)
    private AuthenticationManager authenticationManager;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRoleService userRoleService;
    @Autowired
    private RolePermissionService rolePermissionService;

    /**
     * @Description: 处理登录请求, 验证成功向浏览器发送token
     * @param user 前端发来的用户名和密码
     * @return 前端需要的token和用户对应权限等数据
     * @throws AuthenticationException
     */
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody User user) throws AuthenticationException {
        String userName = user.getUserName();
        String userPassword = user.getUserPassword();
//        System.out.println("收到用户名: " + userName + ", 密码: " + userPassword );
        UsernamePasswordAuthenticationToken upToken = new UsernamePasswordAuthenticationToken(userName, userPassword);
//        System.out.println("upToken: " + upToken);
        Authentication authentication = authenticationManager.authenticate(upToken);
//        System.out.println("Authentication: " + authentication);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        //根据用户名和登录时间生成Token
        final String token = JwtTokenUtil.generateToken(userName);

        //获取用户的角色id
        Long roleID = userRoleService.getRoleByUserName(user.getUserName());
        List<String> list = new ArrayList<String>();
        list = rolePermissionService.getPermissionNameListByRoleID(roleID);

//        System.out.println("生成token:" + token);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("token", token);
        map.put("roleID", roleID);
        map.put("userName", userName);
        map.put("permList", list);
//        map.put("userID", )

        //TODO: token中传递权限 (已在userDetailsService中实现)
//        map.put("permissionList", )

        return ResponseEntity.ok(map);
//        return ResponseEntity.ok(Constant.SUCCESS);
    }
}
