package com.happy.generator.config.template;

import lombok.Data;

/**
 * 项目信息
 *
 * @author skycoder
 * 
 */
@Data
public class ProjectInfo {
    /**
     * 项目包名
     */
    private String packageName;

    /**
     * 后端生成路径
     */
    private String backendPath;
    /**
     * 前端生成路径
     */
    private String frontendPath;
}