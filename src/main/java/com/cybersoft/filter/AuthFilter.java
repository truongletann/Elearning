package com.cybersoft.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import io.jsonwebtoken.Jwts;

//Object name:
//Description:
//Input params:
//Output:
//Creator: Dương
//Version:
//Created on:
public class AuthFilter extends BasicAuthenticationFilter{
	
	private UserDetailsService userDetailsService;
	
	private final String SIGN_KEY = "ABC_XYZ";

	public AuthFilter(AuthenticationManager authenticationManager, UserDetailsService userDetailsService) {
		super(authenticationManager);
		this.userDetailsService = userDetailsService;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		if(request.getServletPath().startsWith("/api/admin/auth")||request.getServletPath().startsWith("/api/user/")) {
			chain.doFilter(request, response);
			return;
		}
		
		String tokenHeader = request.getHeader("Authorization");
		
		if(tokenHeader!=null && !tokenHeader.isEmpty() && tokenHeader.startsWith("Bearer ")) {
			String token = tokenHeader.replace("Bearer ", "");
			String email = Jwts
					.parser()
					.setSigningKey(SIGN_KEY)
					.parseClaimsJws(token)
					.getBody()
					.getSubject();

			UserDetails user =  userDetailsService.loadUserByUsername(email);
			Authentication authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
			SecurityContextHolder.getContext().setAuthentication(authentication);
			
			chain.doFilter(request, response);
			
		}else {
			response.sendError(401, "Please Login to continute !");
		}
		
		
	}
}
