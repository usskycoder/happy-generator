package com.happy.generator.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 表单布局 枚举
 *
 * @author skycoder
 * 
 */
@Getter
@AllArgsConstructor
public enum FormLayoutEnum {
    ONE(1),
    TWO(2);
    
    private final Integer value;
}
