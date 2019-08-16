package com.huihong.alpha.util;

import java.util.List;

/**
* <b>Description:</b><br> 
* @author yehan
* @Note
* <b>ProjectName:</b> ark-model
* <br><b>PackageName:</b> com.huihong.model
* <br><b>ClassName:</b> Page
* <br><b>Date:</b> 2019年1月7日 上午11:15:46
*/
public class Page<T> {

	// 总条数
	private Long totalRecord;
	// 当前页
	private Integer index;
	// 一页显示数量
	private Integer count = 10;
	// 结果集
	private List<T> list;
	// 查询条件集
	private T queryParam;
	public Long getTotalRecord() {
		return totalRecord;
	}
	public void setTotalRecord(Long totalRecord) {
		this.totalRecord = totalRecord;
	}
	public Integer getIndex() {
		return index;
	}
	public void setIndex(Integer index) {
		this.index = index;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	public List<T> getList() {
		return list;
	}
	public void setList(List<T> list) {
		this.list = list;
	}
	public T getQueryParam() {
		return queryParam;
	}
	public void setQueryParam(T queryParam) {
		this.queryParam = queryParam;
	}

	
}
