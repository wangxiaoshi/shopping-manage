package com.huihong.alpha.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import com.huihong.alpha.util.Constant;
import com.huihong.alpha.util.JwtTokenUtil;

public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        String jwtToken = request.getHeader(JwtTokenUtil.HEADER);
        // TOKEN是否为空
        if (jwtToken != null) {
//            System.out.println("jwtToken不为空");
            jwtToken = jwtToken.substring(JwtTokenUtil.TOKENHEAD.length());
            // TOKEN解析用户名
            String username = JwtTokenUtil.getUsernameFromToken(jwtToken);
//            System.out.println("token用户名:"+username);
            // 校验TOKEN的合法性
            if (username != null && JwtTokenUtil.validateToken(jwtToken, username)) {
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authentication);
                request.setAttribute(Constant.USERNAME, username);
            }
        }

        chain.doFilter(request, response);
    }

}
