package com.happy.generator.service;

import com.happy.generator.common.page.PageResult;
import com.happy.generator.common.query.Query;
import com.happy.generator.common.service.BaseService;
import com.happy.generator.entity.ProjectModifyEntity;

import java.io.IOException;

/**
 * 项目名变更
 *
 * @author skycoder
 * 
 */
public interface ProjectModifyService extends BaseService<ProjectModifyEntity> {

    PageResult<ProjectModifyEntity> page(Query query);

    byte[] download(ProjectModifyEntity project) throws IOException;

}