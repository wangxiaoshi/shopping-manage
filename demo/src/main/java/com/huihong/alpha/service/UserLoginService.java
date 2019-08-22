package com.huihong.alpha.service;

import com.huihong.alpha.dao.RolePermissionDao;
import com.huihong.alpha.dao.UserDao;
import com.huihong.alpha.dao.UserRoleDao;
import com.huihong.alpha.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * SecurityConfig所需要用来处理登录的服务
 */
@Service
public class UserLoginService implements UserDetailsService {
    @Autowired(required = false)
    private UserDao userDao;
    @Autowired
    private UserRoleDao userRoleDao;
    @Autowired
    private RolePermissionDao rolePermissionDao;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User user = userDao.getUserByName(userName);
        if (user != null) {
            List<String> list = new ArrayList<String>();
            //通过username查询roleID
            Long roleID = userRoleDao.getRoleByUserName(userName);
            list = rolePermissionDao.getPermissionListByRoleID(roleID);
//            System.out.println("userDetails拿到权限列表: "+list);
            return new org.springframework.security.core.userdetails.User(userName,user.getUserPassword() , list.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList()));
        }
        return null;
    }
}
