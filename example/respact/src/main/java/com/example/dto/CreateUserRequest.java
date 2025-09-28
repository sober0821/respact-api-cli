package com.example.dto;

/**
 * 创建用户请求
 */
public class CreateUserRequest {
    /**
     * 用户名（必填）
     */
    private String username;
    
    /**
     * 邮箱地址（必填）
     */
    private String email;
    
    /**
     * 用户年龄
     */
    private Integer age;
    
    /**
     * 用户头像URL
     */
    private String avatar;
    
    // Getters and Setters
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public Integer getAge() {
        return age;
    }
    
    public void setAge(Integer age) {
        this.age = age;
    }
    
    public String getAvatar() {
        return avatar;
    }
    
    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}
